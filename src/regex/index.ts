const email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const uri =
  /^(https?:\/\/)?(www\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const cuid = /^c[^\s-]{8,}$/i;
const ulid = /^[0-9A-HJKMNP-TV-Z]{26}$/;

const alphanumeric = /^[-\w\s]+$/;

const kebabCase = /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/;

const regex = {
  email,
  uri,
  alphanumeric,
  cuid,
  ulid,
  kebabCase,
};

export default regex;
