/** @format */

// no indentation if it is for email
export function createHierarchy(obj, rootKeys, isEmail = false) {
  let hierarchy = "";
  rootKeys.forEach((rootKey) => {
    hierarchy += isEmail
      ? `<ul>${createNode(obj, rootKey, 1, isEmail)}</ul>`
      : `<ul class="level-1" style="display:inline-block">${createNode(
          obj,
          rootKey,
          1,
          isEmail
        )}</ul>`;
  });
  return hierarchy;
}

function createNode(obj, key, level, isEmail) {
  let node = "";
  const indent = 30 * level;
  node += isEmail
    ? `<li>${key.split("-")[0]}`
    : `<li class="level-item" style="margin-left:${indent}px">${
        key.split("-")[0]
      }`;
  if (obj[key]) {
    node += "<ul>";
    obj[key].forEach((subKey) => {
      node += createNode(obj, subKey, level + 1, isEmail);
    });
    node += "</ul>";
  }
  node += "</li>";
  return node;
}
