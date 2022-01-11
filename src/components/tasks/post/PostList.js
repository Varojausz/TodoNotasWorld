import React from 'react'
/* import PropTypes from 'prop-types' */
import Post from './Post/'


function PostList ({tasks, removeUpdate}) {
    return (
      <div style={{marginTop: '24px'}}>
        {tasks.map((item, i) => {
            return <Post post={item} key={i} onRemove={removeUpdate}/>
          })
        }
      </div>
    )
}
/* PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  removeUpdate: PropTypes.func.isRequired
} */


