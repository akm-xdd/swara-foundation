import './Question.css';
import React from 'react';
 // Import the CSS file

const faqs = [
    {
        question: "What is the impact of my donation on the education of underserved children through the Mission Education(ME) programme?",
        answer: "Your donation to the Mission Education(ME) programme has a direct and significant impact on the education of underprivileged children. It helps provide access to quality education, learning resources, and support services. Your contribution enables these children to break the cycle of poverty, gain knowledge and skills, and have a brighter future."
    },
    {
        question: "How will Smile Foundation keep me updated on the progress of the children supported through my donation?",
        answer: "Smile Foundation values transparency and keeps donors updated on the progress of the children supported through regular communication. You will receive newsletters, impact reports, or personalized updates on the children's achievements, academic progress, and success stories."
    },
    {
      question : "Are my donations to the Mission Education(ME) programme eligible for tax benefits?",
      answer: "Yes, donations made to Smile Foundation's Mission Education programme are eligible for tax benefits under the applicable provisions of the income tax laws in your country. You will receive a tax receipt for your donation, which you can use for tax purposes."
    },
    {
      question:"How does Smile Foundation ensure transparency and accountability in the utilization of funds for the programmes?",
      answer : "Smile Foundation maintains strict financial guidelines and undergoes regular audits to ensure transparency and accountability in the utilization of funds. We publish financial reports on our website, providing a breakdown of the expenses and impact created by the programmes."
    }
];

function Question() {
  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <p className="faq-question">
            <a className="btn btn-primary faq-button" data-bs-toggle="collapse" href={`#c${index}`} role="button" aria-expanded="false" aria-controls={`c${index}`}>
              {faq.question}
            </a>
          </p>
          <div className="collapse faq-answer" id={`c${index}`}>
            <div className="card card-body">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Question;
