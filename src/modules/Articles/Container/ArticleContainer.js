import ArticleComponent from '../Component/ArticleComponent'
import React from 'react'

const ArticleContainer = (props) => {
    const {title, desc, nameAuthor, date, avatar, images, sumber} = props.route.params;
    
    const handlePressBack = () => {
        props.navigation.goBack();
    };

    return (
        <ArticleComponent 
            handlePressBack={handlePressBack}
            title={title}
            desc={desc}
            nameAuthor={nameAuthor}
            date={date}
            avatar={{uri: avatar}}
            images={{uri: images}}
            sumber={sumber}
        />
    )
}

export default ArticleContainer
