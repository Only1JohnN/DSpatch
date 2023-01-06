const TermsBody = ({terms}) => {
    return (
        <div className='container terms--content'>
        <div>
          {terms.map((ls) => (
            <div className='mb-5' key={ls.id}>
              <h2 className='text-uppercase mb-3'>{ls.title}</h2>
              <h3>{ls.subtitle1}</h3>
              <p>{ls.subtext1}</p>
              <h3>{ls.subtitle2}</h3>
              <p>{ls.subtext2}</p>
              <h3>{ls.subtitle3}</h3>
              <p>{ls.subtext3}</p>
              <h3>{ls.subtitle4}</h3>
              <p>{ls.subtext4}</p>
              <h3>{ls.subtitle5}</h3>
              <p>{ls.subtext5}</p>
              <h3>{ls.subtitle6}</h3>
              <p>{ls.subtext6}</p>
              <h3>{ls.subtitle7}</h3>
              <p>{ls.subtext7}</p>
              <div>
                <p>{ls.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
 
export default TermsBody;