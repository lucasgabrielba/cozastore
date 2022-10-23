import pagenotfoundImage from './pagenotfound.jpg';

export const PageNotFound = () => {
  return (

        <div className="pageNotFound">
          <h1>Oops..! 404 página não encontrada</h1>
          <p>Parece que você chegou à página errada em nosso servidor</p>
          <img
            src={pagenotfoundImage}
            height="500"
            width="500"
            alt="not found"
          />
        </div>
  );
};
