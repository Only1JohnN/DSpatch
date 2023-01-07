import Signup from "./TermsSignup";


const TermsHeader = ({ terms }) => {
  return (
    <>
      <div className='terms--title'>
        <h6>LEGAL AGREEMENT</h6>
        <h1>TERMS & CONDITIONS</h1>
        <h6>Last Updated: January 10, 2023</h6>
      </div>
      {/* Table of content */}
      <div className='container d-flex justify-content-between'>
        <div>
          <h2 className='mb-4'>TABLE OF CONTENT</h2>
          {terms.map((list) => (
            <div className='terms--list' key={list.id}>
              <li>{list.title}</li>
            </div>
          ))}
        </div>
        <Signup />
      </div>
    </>
  );
};

export default TermsHeader;
