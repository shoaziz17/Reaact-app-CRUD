

function GameCard() {
  return (
    <div className="card">
      <div className="card-header mx-4 -mt-6">
          <img
            className="w-auto rounded-lg"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="tailwind-card-image"
          />
      </div>
      <div className="card-body">
        <a href="#">
          <h4 className="font-semibold">Material Design 3</h4>
        </a>
        <p className="opcacity-60 mb-4">
          The time is now for it to be okay to be great. People in this world
          shun people for being great. For being a bright color. For standing
          out.
        </p>
        <button className="button button-pink" data-ripple-light="true">
          Read More
        </button>
      </div>
    </div>
  );
}

export default GameCard;
