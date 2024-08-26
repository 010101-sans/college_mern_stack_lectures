import React from "react";

const cardStyle = {
    // backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
    padding: "36px",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    color: "black",
};

const titleStyle = {
    margin: "0 0 16px 0",
};

const contentStyle = {
    margin: "0",
};

const Card = ({ title, content, img }) => {
    return (
        <>
            <div className="card" style={cardStyle}>
                <img src={img} style={{ width: "100px" }} alt={title} />
                <h2 className="card-title" style={titleStyle}>
                    {title}
                </h2>
                <p className="card-content" style={contentStyle}>
                    {content > 80000 ? (
                        <>
                            <span style={{ textDecoration: "line-through", color: "red" }}>
                                {content + " Rs"}
                            </span>{" "}
                            <br /> <span style={{ color: "green" }}>{content * 0.8 + " Rs"}</span>
                        </>
                    ) : (
                        <span style={{ color: "green" }}>{content + " Rs"}</span>
                    )}
                </p>
            </div>
        </>
    );
};
export default Card;
