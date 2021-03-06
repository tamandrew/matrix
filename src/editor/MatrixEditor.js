import React, { useState } from 'react';

import Table from "./Table.js"

import MatrixExport from "./matrixTools/MatrixExport.js"
import MatrixMath from './matrixTools/MatrixMath.js';
import MatrixActions from './matrixTools/MatrixActions.js';
import TextImport from './matrixTools/TextImport.js';

import "./MatrixEditor.css";

function MatrixEditor(props) {
    const [showActions, setShowActions] = useState(false);
    const [showExport, setShowExport] = useState(false);
    const [showMath, setShowMath] = useState(false);
    const [showImport, setShowImport] = useState(false);

    function toggleShown(e) {
        setShowImport(false);
        setShowActions(false);
        setShowExport(false);
        setShowMath(false);

        switch (e.target.id) {
            case "toggleActions":
                setShowActions(!showActions);
                break;
            case "toggleMath":
                setShowMath(!showMath);
                break;
            case "toggleImport":
                setShowImport(!showImport);
                break;
            case "toggleExport":
                setShowExport(!showExport);
                break;

            default: break;
        }
    }

    var showTable = (props.matrix.length <= 51 && props.matrix[0].length <= 51);

    return (
    <div className = "matrixEditor">
        <div id = "options" className = "options">
            <div className = "options-bar">

                <button id = "toggleActions" 
                    className = {"btn matrixButtons " + (showActions ? "btn-info" : "btn-secondary")} 
                    onClick = {toggleShown}> 
                    {showActions ? "Close" : "Matrix Actions"}
                </button> 

                <button id = "toggleMath" 
                    className = {"btn matrixButtons " + (showMath ? "btn-info" : "btn-secondary")}
                    onClick={toggleShown}>                
                    {showMath ? "Close" : "Matrix Math"}
                </button>
                
                <button id = "toggleImport" 
                    className = {"btn matrixButtons " + (showImport ? "btn-info" : "btn-secondary")}
                    onClick={toggleShown}>
                    {showImport ? "Close" : "Import Matrix From Text"}
                </button>

                <button id = "toggleExport" 
                    className = {"btn matrixButtons " + (showExport ? "btn-info" : "btn-secondary")} 
                    onClick={toggleShown}>
                    {showExport ? "Close" : "Export Matrix"}
                </button>

            </div>


            {showActions ? 
                <MatrixActions 
                    name = {props.name}
                    transpose = {props.transpose}
                    mirrorRowsCols = {props.mirrorRowsCols}
                    fillEmpty = {props.fillEmpty}
                    fillAll = {props.fillAll}
                    fillDiagonal = {props.fillDiagonal}
                    randomMatrix = {props.randomMatrix}
                    reshapeMatrix = {props.reshapeMatrix}/>
            : null}
            
            {showMath ?
                <MatrixMath 
                    matrices = {props.matrices}
                    matrix = {props.matrix}
                    setMatrix = {props.setMatrix}
                    sparseVal = {props.sparseVal}/>
            : null } 

            {showImport ? 
                <TextImport
                    generateUniqueName = {props.generateUniqueName}
                    setMatrix = {props.setMatrix}
                    currentName = {props.name}/> 
            : null}

            {showExport ?
                <MatrixExport 
                    matrix = {props.matrix}
                    sparseVal = {props.sparseVal}/>
            : null }   

            
        </div>


        {showTable ? 
            <Table 
                mirror = {props.mirror}
                name = {props.name}
                matrix = {props.matrix} 
                addCols = {props.addCols}
                addRows = {props.addRows}
                addRowsAndCols = {props.addRowsAndCols}
                updateEntry = {props.updateEntry}
                tryToDelete = {props.tryToDelete}
            /> 
            : <div className = "bigMatrixInfo">
                Matrices larger than 50 x 50 are too big to be displayed<br/>
                Use Import Matrix From Text or Matrix Actions to edit the matrix<br/>
                Use Export Matrix to view the matrix
            </div>}

    </div>)

}



export default MatrixEditor;
