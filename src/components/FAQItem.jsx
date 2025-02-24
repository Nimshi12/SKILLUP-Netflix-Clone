/* eslint-disable react/prop-types */
const FAQItem = ({faq}) => {
  return (
    <div className="faq-item">
      <div className="faq-item-title">{faq.title}</div>
      <div className="faq-item-description"> {faq.description} </div>
    </div>
  );
};

export default FAQItem;
