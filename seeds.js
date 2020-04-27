var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Commment   = require("./models/comment");

var data = [
    {
        name: "Hogsmeade", 
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nam enim, fugit quis amet optio quia repellat, dolores maxime, deserunt voluptatibus perferendis voluptatum doloribus? Quaerat, error iure ab laboriosam magni sint eligendi ullam sit expedita iste dolorum veritatis itaque nesciunt eius voluptas ipsam, natus libero pariatur? Assumenda totam quas quam?"
    },
    {
        name: "Cloud's Rest", 
        image: "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nam enim, fugit quis amet optio quia repellat, dolores maxime, deserunt voluptatibus perferendis voluptatum doloribus? Quaerat, error iure ab laboriosam magni sint eligendi ullam sit expedita iste dolorum veritatis itaque nesciunt eius voluptas ipsam, natus libero pariatur? Assumenda totam quas quam?"
    },
    {
        name: "Green Plateau", 
        image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse nam enim, fugit quis amet optio quia repellat, dolores maxime, deserunt voluptatibus perferendis voluptatum doloribus? Quaerat, error iure ab laboriosam magni sint eligendi ullam sit expedita iste dolorum veritatis itaque nesciunt eius voluptas ipsam, natus libero pariatur? Assumenda totam quas quam?"
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // } else{
        //     console.log("removed campgrounds");
        //     //add a few campgrounds
        //     data.forEach(function(seed){
        //         Campground.create(seed, function(err, campground){
        //             if(err)
        //             {
        //                 console.log(err);
        //             }
        //             else{
        //                 console.log("new campground added");
        //                 //create a comment
        //                 Commment.create(
        //                     {
        //                         text: "This place is great, but I wish there was Internet",
        //                         author: "Homer"
        //                     }, function(err, comment){
        //                         if(err){
        //                             console.log(err);
        //                         }
        //                         else{
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("created new comment");
        //                         }                                
        //                     });
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;

//https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80
//https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60
//https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80