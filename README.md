# Brise custom inputs
This is responsive custom material inputs which you can use on your website. 

Preview of this inputs you can find on [CodePen](https://codepen.io/vladbrise/pen/jKVOVE).

# Setup:

1. First you need to link css file **brise-inputs.css** to your website into **< head >** tag.

2. Copy this html blocks which you need to your **< form >** tag:

### Input text:

    <div class="brise-input">
      <input type="text" name="text" required>
      <label>Name</label>
      <span class="line"></span>
    </div>
    
### Textarea:

    <div class="brise-text">
      <textarea name="msg" id="" cols="30" rows="10"></textarea>
      <label>Name</label>
    </div>
    
### Checkbox:

    <div class="brise-checkbox">
      <label>
        <input type="checkbox" name="check" required>
        <span class="checkbox"></span>
        <span class="label">Name</span>
      </label>
    </div>
    
### Radio button:

    <div class="brise-radio">
      <label>
        <input name="radio" type="radio" required>
        <span class="radio"></span>
        <span class="label">Name</span>
      </label>
    </div>
    
### Submit button:

    <button class="brise-btn">Submit</button>
    
## Custom file upload
If you want to use custom file input, you need to link js file **brise-upload.js** with **< script >** tag in your html page, and copy this custom input:

    <div class="brise-upload">
      <label>
        <input type="file" name="file" accept="">
        <span class="label">Upload file</span>
      </label>
    </div>
    
Language of the text "Selected file" you can change in **brise-upload.js**

## Responsive
To make inputs responsive - insert inputs into this divs:

    <!-- For Inline -->
    
    <div class="wrap-line">
      <!-- Your inputs -->
    </div>
    
    
    <!-- For Column -->
    
    <div class="wrap-column">
      <!-- Your inputs -->
    </div>

### That's all! 

## Some example form:

    <form id="brise-form">
    
      <div class="wrap-line">
        <div class="brise-input">
          <input type="text" name="text" required>
          <label>Name</label>
          <span class="line"></span>
        </div>
      </div>
      <div class="brise-text">
        <textarea name="msg" id="" cols="30" rows="10"></textarea>
        <label>Name</label>
      </div>
      
      <div class="wrap-column">
        <div class="brise-checkbox">
          <label>
            <input type="checkbox" name="check" required>
            <span class="checkbox"></span>
            <span class="label">Name</span>
          </label>
        </div>
        <div class="brise-checkbox">
          <label>
            <input type="checkbox" name="check" required>
            <span class="checkbox"></span>
            <span class="label">Name</span>
          </label>
        </div>
      </div>
      
      <div class="brise-upload">
        <label>
          <input type="file" name="file" accept="">
          <span class="label">Upload file</span>
        </label>
      </div>
      
      <button class="brise-btn">Submit</button>
      
    </form>



Don't forget to link your fonts and add font-family to input selectors, by default I use **Roboto** from google fonts.

That's my first repository, I hope it's been usefull :)

Follow my instagramm [@brisedesign](https://www.instagram.com/brisedesign/)

And visit my website [brisedesign.com](https://brisedesign.com)
