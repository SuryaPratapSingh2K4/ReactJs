import React from "react";

function Card({firstname,infor,btntext="#visit-me"}) {
    // console.log("props",props);
    // console.log(props.firstname);
    console.log(firstname);
    
    
  return (
    <div className="w-100 flex flex-col rounded-xl bg-white min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold text-5xl ">{firstname}</h1>
          <h1 className="font-bold text-5xl">{infor.username}</h1>
        </div>
        <div className="flex  justify-between">
          <p className="font-semibold text-3xl">{btntext}</p>
          <p className="font-semibold text-3xl">{infor.age}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
