import React from 'react';

const faqs = [
    {
        question: "What is the impact of my donation on the education of underserved children through the Mission Education(ME) programme?",
        answer: "Your donation to the Mission Education(ME) programme has a direct and significant impact on the education of underprivileged children. It helps provide access to quality education, learning resources, and support services. Your contribution enables these children to break the cycle of poverty, gain knowledge and skills, and have a brighter future."
    },
    {
        question: "How will Smile Foundation keep me updated on the progress of the children supported through my donation?",
        answer: "Smile Foundation values transparency and keeps donors updated on the progress of the children supported through regular communication. You will receive newsletters, impact reports, or personalized updates on the children's achievements, academic progress, and success stories."
    }
];

function Question() {
  return (
    <div>
      {faqs.map((faq, index) => (
        <div className="p-2" key={index}>
          <p className="d-inline-flex gap-1">
            <a className="btn btn-primary" data-bs-toggle="collapse" href={`#c${index}`} role="button" aria-expanded="false" aria-controls="collapseExample">
              {faq.question}
            </a>
          </p>
          <div className="collapse" id={`c${index}`}>
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
