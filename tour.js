AFRAME.registerComponent("tour",{
    init:function(){
        this.createMyImages()
    },

    createMyImages:function(){
        const thumbnails=[
            {
                id:"photo1",
                title:"South Korea",
                url: "./assets/thumbnails/photo1.png"

            },

            {
                id:"photo2",
                title:"Paris",
                url:"./assets/thumbnails/photo2.jpg"

            },



        ]
        console.log(thumbnails)
        let previousXposition=-60
        for(var item of thumbnails){
            const posX=previousXposition+29
            const posY=-5
            const posZ=-40


            const position={x:posX, y:posY,z:posZ}
            previousXposition=posX


            const borders=this.createBorder(position,item.id)



            const images=this.createThumbnails(item)
            borders.appendChild(images)

            const titles=this.createTitle(position,item)
            borders.appendChild(titles)

            this.el.appendChild(borders)
        }

        
    },

    createThumbnails:function(item){
        const entity1=document.createElement("a-entity")
        
        entity1.setAttribute("visible",true),
        entity1.setAttribute("geometry",{
            primitive:"circle",
            radius:10

        })

        entity1.setAttribute("material",{
            src:item.url
        })
        return entity1

    },
    createBorder:function(position,id){
        const entity1=document.createElement("a-entity")
        entity1.setAttribute("position",position),
        entity1.setAttribute("visible",true),
        entity1.setAttribute("geometry",{
            primitive:"ring",
            radiusInner:9,
            radiusOuter:10

        })

        entity1.setAttribute("material",{
            color:"red",
            opacity:1

        })
        entity1.setAttribute("cursor-event",{})


        return entity1

    },

    createTitle:function(textPosition,textItem){
        const entity1=document.createElement("a-entity")
        const txtPosition=textPosition
        txtPosition.y=-40



        entity1.setAttribute("position",txtPosition),
        entity1.setAttribute("visible",true)
        entity1.setAttribute("text",{
            align:"center",
            width:60,
            color:"black",
            value:textItem.title

        })

        return entity1


    }
})