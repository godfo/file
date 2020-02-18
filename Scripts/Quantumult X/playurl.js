let url = $request.url

function getParams(key) {
    let regex = new RegExp(`${key}=(\\d*?)&`)
    let tmp = regex.exec(url)
    return tmp ? tmp[1] : null
}

let url = {
        url: `https://bilibili.mlyx.workers.dev/?cid=${getParams('cid')}&ep_id=${getParams('ep_id')}` ,
        method: 'GET',
        headers: {Cookie: cookieVal}
              }

$task.fetch(url).then(response) => {
    let data = response.body
    if(response.statusCode == 404) {
       $notify('获取播放链接失败', '使用原始链接', 'biliplus未收录此资源或服务器错误')
        $done({})
    }
    else {
        $notify('获取播放链接成功', '使用大会员链接', 'success')
        $done({ body })
    }
})
