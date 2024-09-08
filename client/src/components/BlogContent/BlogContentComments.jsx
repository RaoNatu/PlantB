import React from 'react'
import { formatDistanceToNow } from 'date-fns'

const BlogContentComments = ({ comments }) => {

  return (
    <div className="w-full">
      <h2 className="capitalize text-2xl font-medium place-self-start mt-10">
        Comments
      </h2>
      {comments.length ? (
        <>
          <div className="flex flex-col gap-2">
            {comments.map((data, index) => (
              <div key={index} className="flex gap-3 mt-5 items-center">
                <div className="rounded-full overflow-hidden">
                  <img src="https://placehold.co/50" alt="profile_img" />
                </div>
                <div className="flex flex-col gap-1 justify-between">
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="font-bold hover:text-themeColor transition-all ease-in-out duration-[0.3s]"
                    >
                      {data.name}
                    </a>
                    <p className="text-sm text-gray-400">
                      {formatDistanceToNow(new Date(data.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <p className="text-[15px] text-gray-600">{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-400">No comments yet</p>
      )}
    </div>
  )
}

export default BlogContentComments
