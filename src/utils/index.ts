export const Uri = "https://api.leeapps.cn/dialy/";

export const fixUrl = (content, url) => {
  let str = content.replace(/(\.\.\/)+/g, $1 => {
    const len = $1.length / 3;
    return url
      .split("/")
      .map(v => v + "/")
      .slice(0, 0 - len - 1)
      .join("");
  });
  const urls = url.split("://");
  const rUrl = urls[0] + "://" + url.split("://")[1].split("/")[0];
  str = str.replace(/!\[\]\(([^\)]+)\)/g, ($1, $2) => {
    if ($2.indexOf("://") > -1) return $1;
    return `![](${rUrl}${$2})`;
  });
  return str;
};

export const dateForLatest = timestamp => {
  timestamp = new Date(timestamp).getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - timestamp

  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return "不久前"
  }

  // 计算差异时间的量级
  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute

  // 数值补0方法
  const zero = function(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };

  // 使用
  if (monthC > 12) {
    // 超过1年，直接显示年月日
    return (function() {
      const date = new Date(timestamp);
      return (
        date.getFullYear() +
        "年" +
        zero(date.getMonth() + 1) +
        "月" +
        zero(date.getDate()) +
        "日"
      );
    })();
  } else if (monthC >= 1) {
    return parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return parseInt(minC) + "分钟前";
  }
  return "刚刚";
};

export default {};
