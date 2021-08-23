class InputGroup {
    $container;
    $input;
    $label;
    $errorMsg; 
    constructor(type, label, name){
        this.$container = document.createElement("div");
        this.$container.classList.add("input-group"); 

        this.$input = document.createElement("input");
        this.$input.type = type; 
        this.$input.name = name; 

        this.$label = document.createElement("label");
        this.$label.style.width = "250px";     
        this.$label.innerHTML = label; 

        this.$errorMsg = document.createElement("label")
        this.$errorMsg.classList.add("error-msg"); 

    }


    setError(message){
        if(message){
            this.$errorMsg.innerHTML = message; 
            this.$container.classList.add("has-error")
        }else{
            this.$errorMsg.innerHTML = "";
            this.$container.classList.remove("has-error")
        }
    }

    setInputValue = (newValue) => {
        this.$input.value = newValue;
    } 

    getInputValue = () => {
        return this.$input.value; 
    }

    render() {
        this.$label.appendChild(this.$input);
        this.$label.appendChild(this.$errorMsg)
        this.$container.appendChild(this.$label);
        return this.$container;
    }
} 

export { InputGroup };