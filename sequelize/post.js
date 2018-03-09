import Sequelize from 'sequelize';
const sequelize = new Sequelize('database',null, null,{
    dialect: 'sqlite',
    storage: './sql_db.sqlite'
});
const Post = sequelize.define('post',{
    title: {
        type: Sequelize.STRING
    },
    text: {
        type: Sequelize.STRING
    }
});

Post.sync({force:true})
.then(() =>{
    Post.create({
        title: 'New GraphQL Post',
        text: 'asdjhakhdkjahsdkjahsdkjhas'
    });
});

export default Post;