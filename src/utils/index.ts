export const Uri = "https://daily.leeapps.cn/daily/";

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

export const dateForLatest = (timestamp, language = 0) => {
  timestamp = new Date(timestamp).getTime()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const now = new Date().getTime()
  const diffValue = now - timestamp

  // 如果本地时间反而小于变量时间
  if (diffValue < 0) {
    return language ? "不久前" : "just a moment ago"
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
    return parseInt(monthC) + (language ? "月前" : "months ago");
  } else if (weekC >= 1) {
    return parseInt(weekC) + (language ? "周前" : "weeks ago");
  } else if (dayC >= 1) {
    return parseInt(dayC) + (language ? "天前" : "d ago");
  } else if (hourC >= 1) {
    return parseInt(hourC) + (language ? "小时前" : "h ago");
  } else if (minC >= 1) {
    return parseInt(minC) + (language ? "分钟前" : "m ago");
  }
  return "刚刚";
};

export default {};
