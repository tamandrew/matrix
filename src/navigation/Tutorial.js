import React, {useLayoutEffect, useState} from "react";
import "./Tutorial.css";
function Tutorial(props) {
    const [selected, setSelected] = useState("editor");
    const [specificTutorial, setSpecificTutorial] = useState(null)

    useLayoutEffect(() => {
        var inside = null;
        switch(selected) {
            case "editor":
                inside = <div>
                    The table below can be used to modify your matrices. The white boxes represent your matrix, and the red boxes allow you to quickly expand the matrix. 
                    <ul className = "tutorialList">
                        <li>Typing in a white box will update the corresponding entry. </li>
                        <li>Typing in a red box will add a row/column to the matrix. They are not part of the matrix until you type in them.</li>
                        <li>You can delete empty rows/columns with Backspace. The entire row/column must be empty.</li>
                        <li>Empty boxes will be filled with a sparse value when exporting or doing math. You can edit this value in the settings.</li>
                        <li>If you want to mirror your inputs, you can enable this in the settings. Typing in box (i, j) will also edit in box (j, i).</li>
                    </ul>
                </div>
                break;
            case "saving":
                inside = <div>
                You can create multiple matrices and swap between them. If you need your matrices to persist after you close this webpage, you can also save them to your local browser storage. The matrices will automatically be reloaded when this webpage is reopened.
                <ul className = "tutorialList">
                    <li>All matrices must have a name. Valid characters are uppercase and lowercase letters and underscores.</li>
                    <li>You can rename a matrix by clicking its name on the selector buttons. You can also resize it by clicking the size and entering new dimensions.</li>
                    <li>Save matrices to your local storage using the Save Matrices button.</li>
                    <li>You can enable Auto Save in the settings if you want to automatically save your matrices after any changes are made</li>
                </ul>
            </div>
                break;
            case "actions":
                inside = <div>
                Matrix Actions allows you to modify your matrix quickly. Most of these actions are irreversible, so save your matrices to your local storage or duplicate them if you might want to reverse the changes.
                <ul className = "tutorialList">
                    <li>Transpose will switch your matrices rows and columns</li>
                    <li>Mirroring your matrix will copy elements (i, j) over the diagonal to (j, i). Mirroring Rows will copy the elements above the diagonal onto those below the diagonal. Mirroring Columns does the opposite.</li>
                    <li>Fill Empty With will replace all empty boxes with the inputted element.</li>
                    <li>Fill All With will replace all boxes with the inputted element.</li>
                    <li>Fill Diagonal with replace all entires (i, i) with the inputted element.</li>
                    <li>Randomize Elements will replace all entries with a random integer between the specified range inclusive.</li>
                    <li>Reshape Matrix will change the dimensions of the matrix and rearrange the entries similar to NumPy's reshape. The product of the new dimensions must be equal to the product of the old dimensions.</li>
                </ul>
            </div>
                break;
            case "math":
                inside = <div>
                    You can evaluate mathematical expressions of your matrices using Matrix Math.
                    <ul className = "tutorialList">
                        <li>Enter a math expression using the name of matrices and these operators (+, -, *, ^)</li>
                        <li>The answer will be saved as a new matrix.</li>
                        <li>Multiplication can be scalar or matrix multiplication. For example, 2 * A would multiply each element by 2, and A * A would do matrix multiplication.</li>
                    </ul>
                </div>
                break;
            case "importing":
                inside = <div>
                    You can import your matrices from plain text following a specific format.
                    <ul className = "tutorialList">
                        <li>When importing, you can either overwrite the current matrix or save it as a new matrix. If you save it as a new matrix, you can enter a new name or it will automatically generate one if no new name is provided.</li>
                        <li>The Separators format expects elements to be separated by a common character, and rows to be separated by a common character. By default, a space separates elements and new lines separate rows.</li>
                        <li>The 2D Array format expects elements to be formatted in brackets and separated by a common character.</li>
                        <li>Reshape From One Line takes all of the elements separated by a common character and reshapes it into the specified dimensions. The number of elements must be equal to the product of the dimensions</li>
                        <li>The LaTeX format follows LaTeX's matrix syntax. Do not include the environment. You can choose if you want to automatically remove escapes from these characters: {"&%$#_{}~^\\"}</li>
                        <li>The Ignore Whitespace option will remove all whitespace before parsing your input. If you use spaces or new lines for your elements or for your settings, then this will incorrectly parse the text.</li>

                    </ul>
                </div>
                break;
            case "exporting":
                inside = <div>
                        You can export your matrices to plain text for use in programming, LaTeX, etc.
                        <ul className = "tutorialList">
                        <li>The output will appear in the large text box for you to copy it.</li>
                        <li>The 2D Arrays option will export the matrix in row major order. The quick options will allow you to quickly change the settings preset values.</li>
                        <li>The LaTeX option exports the matrix following LaTeX syntax. You can choose if you want to automatically add escapes for these characters: {"&%$#_{}~^\\"}</li>
                    </ul>
                </div>
                break;

            default: break;
        }
        setSpecificTutorial(<div className = "specificTutorial">{inside}</div>);
    }, [selected])


    function TutorialButton(props) {
        return  <button 
            className = {"btn btn-" + (props.selected === props.name ? "dark" : "light")}
            onClick={() => {props.setSelected(props.name)}}>
            {props.text}
        </button>
    }

    return <div className = "tutorial">
        <button 
            className = "btn btn-danger closeTutorial" 
            onClick={props.closeTutorial}>
            {"Close Tutorial"}
        </button>
        
        <h1>Matrix Generator</h1>
        <p className = "tutorialBody">This Matrix Generator web app can help you quickly create and modify matrices. 
            It features an interactive table to quickly modify your matrices, quick actions such as transpose 
            to modify the entire matrix, and export options to quickly save your matrix as plain text. 
            You can also import matrices from text. The app has numerous uses, such as quickly creating LaTeX matrices, 
            creating random matrices of arbitrary size, doing matrix math, etc. Click the buttons below to see how to 
            use the specific parts of this app:
        </p>

        <TutorialButton text = "Matrix Editor" name = "editor" setSelected = {setSelected} selected = {selected} />
        <TutorialButton text = "Saving Matrices" name = "saving" setSelected = {setSelected} selected = {selected} />
        <TutorialButton text = "Matrix Actions" name = "actions" setSelected = {setSelected} selected = {selected} />
        <TutorialButton text = "Matrix Math" name = "math" setSelected = {setSelected} selected = {selected} />
        <TutorialButton text = "Importing From Text" name = "importing" setSelected = {setSelected} selected = {selected} />
        <TutorialButton text = "Export Matrix" name = "exporting" setSelected = {setSelected} selected = {selected} />

        {specificTutorial}

    </div>
            
}


export default Tutorial;