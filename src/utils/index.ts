export const Uri = 'https://api.leeapps.cn/dialy/'

export const fixUrl  = (content, url) => {
  let str = content.replace(/(\.\.\/)+/g, ($1) => {
    const len = $1.length / 3;
    return url.split('/').map(v => v + '/').slice(0, 0 - len - 1).join('');
  })
  const urls = url.split('://')
  const rUrl = urls[0] + '://' + url.split('://')[1].split('/')[0]
  str = str.replace(/!\[\]\(([^\)]+)\)/g, ($1, $2) => {
    if ($2.indexOf('://') > -1) return $1
    return `![](${rUrl}${$2})`
  })
  return str
}

export default {}