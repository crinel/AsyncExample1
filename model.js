function getUser(userId, callbackSuccess, callbackError) {
    setTimeout(function(){
        if(userId) {
            callbackSuccess({ "id": 1, "username": "crina", "email": "crina.berinde@scoalainformala.ro" });
        } else {
            callbackError("getUser could not be processed, please provide a valid user id.");
        }
    }, 2000);
}

function getUserLastPost(userId, callbackSuccess, callbackError){
    setTimeout(function(){
        if(userId) {
            callbackSuccess({ "userId": 1, "id": 1, "title": "sunt aut facere repellat", "body": "quia et recusandae consequuntur expedita" });
        } else {
            callbackError("getUserLastPost could not be processed, please provide a valid user id.");
        }
    }, 2000);
}

function getPostComments(postId, callback){
    setTimeout(function(){
        callback([{ "postId": 1, "id": 1, "name": "id labore ex et quam laborum", "email": "Eliseo@gardner.biz", "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium" }, 
                { "postId": 2, "id": 6, "name": "et fugit eligendi deleniti quidem qui sint nihil autem", "email": "Presley.Mueller@myrl.com", "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in" }]);
    }, 2000);
}

function getUserAlbums(userId, callback){
    setTimeout(function(){
        callback([{ "userId": 1, "id": 3, "title": "omnis laborum odio" },
                { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" }]);
    }, 2000);
}

function getUserToDos(userId, callback){
    setTimeout(function(){
        callback([{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
                { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui","completed": false},
                { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }]);
    }, 2000);
}

var userId = 1;

getUser(userId, (user) => {
    console.log("the user ", user);
    getUserLastPost(user.id, (lastPost) => {
      console.log("   the user lastPost ", lastPost);
      getPostComments(lastPost.id, (comments) => {
        console.log("      the post comments ", comments);
        getUserAlbums(userId, (lastAlbum) => {
            console.log("         the user's albums ", lastAlbum);
        })
        getUserToDos(userId, (lastTodo) => {
            console.log("         the user's todo ", lastTodo);
        })
      })  
    })
}, (errorMsg) => {
    console.log("An error has occured: ", errorMsg);
})