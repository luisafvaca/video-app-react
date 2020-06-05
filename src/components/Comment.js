import React from 'react'

const Comment = ({comments}) => {
    if(!comments) {
        return null
    }

    const comment = comments.map((item) => {
        return (
            <div class="ui comments">
                <div class="comment">
                    <a class="avatar"><img src={item.avatar} /></a>
                    <div class="content">
                        <a class="author">{item.name}</a>
                        <div class="metadata">
                        <div class="date">{item.createdAt}</div>
                        <div class="rating">
                            <i class="star icon"></i>
                            5 Faves
                        </div>
                        </div>
                        <div class="text">
                            {item.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
    <div>{comment}</div>
    );
}

export default Comment;