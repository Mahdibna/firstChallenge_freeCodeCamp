

export default function Card({  randomNumber , rand , color , text}) {    
  return (
    <>
    <div id="quote-box" className="bg-light" style={{transition : 'all 1s' , padding:'20px' , borderRadius:'10px'}}>
      <div id="quote-text" style={{textAlign:'center' , width:'200px'}}>

        <span id="text">{text}</span>
      </div>

      <div className="quote-author">
        - <span id="author">Steve Jobs</span>
      </div>
      <div className="buttons">
        <a
          className="button"
          id="tweet-quote"
          title="Tweet this quote!"
          target="_top"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%20Steve%20Jobs`}
        >
<i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          className="button"
          id="tumblr-quote"
          title="Post this quote on tumblr!"
          target="_blank"
          href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Steve%20Jobs&content&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        >
          <i className="fa fa-tumblr"></i>
        </a>
        <button className="button" id="new-quote" onClick={randomNumber}>
          New quote
        </button>
      </div>
     
    </div>
     <div className="footer" style={{position:'absolute' , bottom:'30%' , left:'50%' , transform:'translate(-50% , -50%)'}}>
     by <a href="#">mahdi</a>
   </div>
   </>
  );
}
