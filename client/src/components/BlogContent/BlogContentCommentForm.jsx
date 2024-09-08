import React from 'react'
import Button from '../../utils/Button'

const BlogContentCommentForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <>
      <h2 className="capitalize text-2xl font-medium place-self-start mt-16">
        Leave a comment
      </h2>
      <form onSubmit={handleSubmit} action="#" className="text-sm w-full">
        <div className="flex flex-col gap-7">
          <textarea
            placeholder="Comment *"
            name="content"
            onChange={handleInputChange}
            className="pl-4 py-3 rounded-xl w-full outline-none border border-1 border-gray-200"
            required
            rows="4"
          />
          <Button variant="form" size="small" className="w-fit self-start">
            Post Comment
          </Button>
        </div>
      </form>
    </>
  )
}

export default BlogContentCommentForm
