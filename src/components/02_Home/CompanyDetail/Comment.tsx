import React from "react";
import StarRating from "./StarRating"; // Adjust the path as necessary
import { RatingType } from "../../../types/FormTypes";

const Comment: React.FC<{ comment: RatingType[] }> = ({ comment }) => {
  return (
    <>
      {comment.length != 0 && (
        <h1 className="max-w-7xl mx-auto text-gray-600 text-2xl font-bold mb-2">
          Değerlendirmeler
        </h1>
      )}

      {comment.map((item: RatingType, index) => (
        <article
          key={index}
          className="border p-4 rounded-lg shadow max-w-7xl mx-auto bg-gradient-to-tl from-white via-white to-neutral-50 mb-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="col-span-1 md:col-span-2 border-r">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center size-[38px] rounded-full bg-white border border-gray-300 me-2">
                  <span className="font-medium text-sm text-gray-800 leading-none">
                    {item.owner.name.charAt(0)}
                  </span>
                </span>
                <div className="font-medium">
                  <p>
                    {item.owner.name} {item.owner.surname}{" "}
                    <span className="text-blue-500">|</span>{" "}
                    <span className="text-gray-500">
                      {item.company_position}
                    </span>
                    <time
                      dateTime={item.createdAt}
                      className="block text-sm text-gray-500"
                    >
                      {item.createdAt.slice(0, 10)} tarihinde yayınlandı
                    </time>
                  </p>
                </div>
              </div>
              <p className="mb-2 text-gray-500 mr-2">{item.rating_detail}</p>
            </div>

            <div className="col-span-1 md:px-8 flex flex-col">
              <p className="mt-1 text-lg text-gray-700">Derecelendirme</p>
              <div className="flex gap-5">
                <StarRating rating={item.service_quality} />
                <h3 className="ms-2 text-sm font-semibold text-gray-600">
                  Kalite
                </h3>
              </div>
              <div className="flex gap-5">
                {" "}
                <StarRating rating={item.time_management} />
                <h3 className="ms-2 text-sm font-semibold text-gray-600">
                  Zamanlama
                </h3>
              </div>
              <div className="flex gap-5">
                <StarRating rating={item.company_communication} />
                <h3 className="ms-2 text-sm font-semibold text-gray-600">
                  İletişim
                </h3>
              </div>
              <div className="flex gap-5">
                <StarRating rating={item.general_rating} />
                <h3 className="ms-2 text-sm font-semibold text-gray-600">
                  Genel
                </h3>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default Comment;
