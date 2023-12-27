const email = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/; // numbers, periods, letters
const uri =
  /^(https?:\/\/)?((www\.)?([a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,6}|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

  const cuid = /^c[\da-zA-Z]{8,}$/;

  const alphanumeric = /^[-\w\s]+$/;

  const kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

  const arabic =
    /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0660-\u0669،؛؟ـ\s\-–—.:!"“”‘’]+$/u;

  const regex = {
    email,
    uri,
    alphanumeric,
    cuid,
    kebabCase,
    arabic,
  };

  export default regex;
