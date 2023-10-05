import moment from "moment";

interface IBook {
  book: {
    title: string;
    author: string;
    genre: string;
    publicationDate: string;
    image: string;
  };
}

const Card = ({ book }: IBook) => {
   return (
     <div className="max-w-sm bg-slate-300 rounded overflow-hidden shadow-lg">
       <img src={book.image} alt="Book Cover" className="w-full h-64" />
       <div className="px-6 py-4">
         <div className="font-bold text-xl mb-2">{book.title}</div>
         <p className="text-gray-700 text-base">Author: {book.author}</p>
         <p className="text-gray-700 text-base">
           Published: {moment(book.publicationDate).format("DD MMMM, YYYY")}
         </p>
         <p className="text-gray-700 text-base">Genre:{book.genre}</p>
       </div>
       <div className="px-6 py-4">
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
           Hardcover
         </span>
         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
           Bestseller
         </span>
       </div>
     </div>
   );
   //(
  //   <div className="w-full h-auto w-[350px] pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
  //     <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
  //       <figure className="mb-2">
  //         <img src={book.image} alt="" className="h-64 ml-auto mr-auto" />
  //       </figure>
  //       <div className="rounded-lg p-4 bg-[#2563EB] flex flex-col">
  //         <div>
  //           <h5 className="text-white text-xl font-bold">{book.title}</h5>
  //           <span className="text-sm text-white">Author: {book.author}</span>
  //         </div>
  //         <div className="flex items-center">
  //           <div className="text-lg text-white font-light">
  //             Genre: {book.genre}
  //           </div>
  //         </div>
  //         <p className="text-[14px] text-white">
  //           Published by {moment(book.publicationDate).format("DD MMMM, YYYY")}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Card;
