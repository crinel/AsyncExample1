function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(userId) {
                resolve({ "id": 1, "username": "crina", "email": "crina.berinde@scoalainformala.ro" });
            } else {
                reject("getUser could not be processed, please provide a valid user id.");
            }
        }, 2000);
    });
}

function getUserFirstPost(userId){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(userId) {
                resolve({ "userId": 1, "id": 1, "title": "sunt aut facere repellat", "body": "quia et recusandae consequuntur expedita" });
            } else {
                reject("getUserFirstPost could not be processed, please provide a valid user id.");
            }
        }, 2000);
    });
}

function getPostComments(postId){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve([{ "postId": 1, "id": 1, "name": "id labore ex et quam laborum", "email": "Eliseo@gardner.biz", "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium" }, 
                { "postId": 2, "id": 6, "name": "et fugit eligendi deleniti quidem qui sint nihil autem", "email": "Presley.Mueller@myrl.com", "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in" }]);
        }, 2000);
    });
}

function getUserAlbums(userId){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve([{ "userId": 1, "id": 3, "title": "omnis laborum odio" },
            { "userId": 1, "id": 4, "title": "non esse culpa molestiae omnis sed optio" }]);
        }, 2000);
    });
}

function getUserToDos(userId, callback){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve([{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
                     { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui","completed": false},
                     { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }]);
        }, 2000);
    });
}


async function getUserDetails(){
    // async / await
    var userId = 1;
    try {
        const user = await getUser(userId);
        // if( user.id !== 2 ) {
        //     throw "some string error";
        //     //throw new Error("a fancy error");
        //     //console("ceva dupa return");
        // }
        console.log("the user ", user);
        const post = await getUserFirstPost(user.id);
        console.log("   the user first post ", post);
        
        const comments = await getPostComments(post.id);
        console.log("      the post first comments ", comments[0]);

    } catch(errorMsg) {
        console.log("An error has occured: ", errorMsg);
    }

    const responseArray = await Promise.all([
        getUserAlbums(userId),
        getUserToDos(userId)
    ]);

    // const albums = await ;
     console.log("         the user's albums ", responseArray[0]);

    // const todos = await getUserToDos(userId);
     console.log("         the user's todo ", responseArray[1]);
}

getUserDetails();


// getUser(userId).then( user => {
//     console.log("the user ", user);
//     // if( user.id !== 2 ) {
//     //     throw "some string error";
//     //     //throw new Error("a fancy error");
//     //     console("ceva dupa return");
//     // }
//     return getUserFirstPost(user.id);
// }).then( post => {
//     console.log("   the user first post ", post);
//     console.log("   the post id ", post.id);

//     return getPostComments(post.id);
// }).then( comments => {
//     console.log("      the post first comment ", comments[0]);
//     return Promise.all( [ 
//         getUserAlbums(userId),
//         getUserToDos(userId)
//     ] );
// }).then( responseArray => {
//     const albums = responseArray[0];
//     console.log("         the user's first album ", albums[0]);
//     const todos = responseArray[1];
//     console.log("         the user's first todo ", todos[0]);
// } )
// .catch((errorMsg) => {
//     console.log("An error has occured: ", errorMsg);

//     //console.log("An error has occured: ", errorMsg.message);
// });