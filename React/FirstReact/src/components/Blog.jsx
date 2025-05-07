import React from "react";
import PropTypes from "prop-types";
function Blog(props) {
  return (
    <div className="blog">
      <h1>Başlık: {props.baslik}</h1>
      <p>İçerik: {props.icerik}</p>
      <p>Puan: {props.puan}</p>
      <p>
        Kategoriler:
        {props.kategoriler.map((kategori, index) => (
          <span key={index}>{kategori}</span>
        ))}
      </p>
    </div>
  );
}

Blog.propTypes = {
  baslik: PropTypes.string.isRequired,
  icerik: PropTypes.string,
  puan: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  kategoriler: PropTypes.arrayOf(PropTypes.string),
};

Blog.defaultProps = {
  icerik: "Xiaomi",
};

export default Blog;
