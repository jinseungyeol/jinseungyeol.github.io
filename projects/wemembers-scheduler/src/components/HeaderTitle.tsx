type HeaderTitleProps = {
  depth: string;
  title: string;
}

export default function HeaderTitle({ depth, title }: HeaderTitleProps) {
  return (
    <div className="header">
      {depth === "one" ? (
        <>
          <div className="oneDepth">
            <h1 className="mainTitle">{title}</h1>
          </div>
        </>
      ) : null}

      {depth === "more" ? (
        <>
          <div className="moreDepth">
            <button className="btnGoback"></button>
            <h1 className="mainTitle">{title}</h1>
          </div>
        </>
      ) : null}
    </div>
  );
}
