var main = function (toDoObjects) {
    "use strict"; 
    var toDos = toDoObjects.map(function (toDo) {
        return toDo.description;
    });

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();




            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }



            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });




            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("the tags tab was clicked!");
            
                var organizeByTags = function (toDoObjects) {
                
                    var tagObjects = tags.map(function (tag) {

                        var toDosWithTag = [];
                        toDoObjects.forEach(function (toDo) {
                
                            if (toDo.tags.indexOf(tag) !== -1) {
                                toDosWithTag.push(toDo.description);
                            }
                        });

                        return { "name": tag, "toDos": toDosWithTag };
                    });
                
                    console.log(tags);
                };

            }  else if ($element.parent().is(":nth-child(4)")) {
                var $input = $("<input>").addClass("description"),
                    $inputLabel = $("<p>").text("Description: "),
                    $tagInput = $("<input>").addClass("tags"),
                    $tagLabel = $("<p>").text("Tags: "),
                    $button = $("<button>").text("+");
            
                $button.on("click", function () {
                    var description = $input.val(),
                        tags = $tagInput.val().split(","); // split on the comma
            
                    toDoObjects.push({"description":description, "tags":tags});
        
                    toDos = toDoObjects.map(function (toDo) {
                          return toDo.description;
                    });
            
                    $input.val("");
                    $tagInput.val("");
                });
            
                $content = $("<div>").append($inputLabel)
                                     .append($input)
                                     .append($tagLabel)
                                     .append($tagInput)
                                     .append($button);
            }
            })
        })
    }
        


$(document).ready(function() {
    $.getJSON("todos.json", function (toDoObjects) {
        main(toDoObjects);
    });
});

