const email = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const uri =
  /^(https?:\/\/)?(www\.)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

const cuid = /^c[^\s-]{8,}$/i;
const ulid = /^[0-9A-HJKMNP-TV-Z]{26}$/;

const here = "";

const alphanumeric = /^[-\w\s]+$/;

const regex = {
  email,
  uri,
  alphanumeric,
  cuid,
  ulid,
};

export default regex;
