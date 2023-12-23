const email = /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/; // numbers, periods, letters
const uri =
  /^(https?:\/\/)?((www\.)?([a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,6}|(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

const cuid = /^c[^\s-]{8,}$/i;
const ulid = /^[0-9A-HJKMNP-TV-Z]{26}$/;

const alphanumeric = /^[-\w\s]+$/;

const kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

const _regex = {
  email,
  uri,
  alphanumeric,
  cuid,
  ulid,
  kebabCase,
};

export default _regex;
