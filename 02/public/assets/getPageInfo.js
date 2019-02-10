window.getPageInfo = (opt) => {
  const info = {
    url: location.href,
    title: document.title
  };

  // オプション指定がなければ全ての設定値を返す
  if (!opt) {
    return info;
  }

  // オプション指定された値のみ返す
  return Object.keys(info).reduce((output, key) => {
    if (opt[key]) {
      output[key] = info[key];
    }
    return output;
  }, {});
};
