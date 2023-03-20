/** @format */

export const createHirarchy = (list) => {
  let html = "<ul>";

  list.forEach((i) => {
    if (i.list) {
      html = html.concat("<ul>");
      html = html.concat(createNestedHtml(i.list));
      html = html.concat("</ul>");
    } else {
      html = html.concat("<li>");
      html = html.concat(i.name);
      html = html.concat("</li>");
    }
  });
  html = html.concat("</ul>");
  return html;
};

const createNestedHtml = (list) => {
  let html = "<ul>";
  list.forEach((i) => {
    if (i.list) {
      html = html.concat("<ul>");
      html = html.concat(createNestedHtml(i.list));
      html = html.concat("</ul>");
    } else {
      html = html.concat("<li>");
      html = html.concat(i.name);
      html = html.concat("</li>");
    }
  });
  html = html.concat("</ul>");
  return html;
};
