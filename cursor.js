AFRAME.registerComponent("cursor-event", {
  schema: {
    selectId: { type: "string", default: "" },
  },
  init: function () {
    this.handleMouseEnter();
    this.handleMouseLeave();
  },

  handlePlacesState: function () {
    const id = this.el.getAttribute("id");
    const placesId = ["photo1", "photo2"];

    if (placesId.includes(id)) {
      const container = document.querySelector("#places-contaier");
      container.setAttribute("cursor-event", {
        selectId: id,
      });

      this.el.setAttribute("material", { color: "green", opacity: 1 });
    }
  },

  handleMouseEnter: function () {
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesState();
    });
  },

  handleMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const el = document.querySelector(`#${this.data.selectId}`);
      const Id = el.getAttribute("id");
      if (Id == this.data.selectId) {
        el.setAttribute("material", {
          color: "black",
          opcity: 1,
        });
      }
    });
  },
});
