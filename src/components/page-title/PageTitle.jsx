const PageTitle = ({ number, title }) => {
  return (
    <div>
      <span className="page-title-number">{number}</span>
      <span className="page-title">{title}</span>
    </div>
  );
};

export default PageTitle;
