(this.webpackJsonpmatrix=this.webpackJsonpmatrix||[]).push([[0],{13:function(t,e,r){"use strict";r.r(e);var o=r(1),s=r.n(o),a=r(7),n=r.n(a),p=r(2),i=r(3),l=r(5),c=r(4),d=r(0),h=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(p.a)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddRow=function(e){t.props.addRows(1),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddCol=function(e){t.props.addCols(1),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleAddBoth=function(e){t.props.addCols(1),t.props.addRows(1),t.props.updateEntry(t.props.row,t.props.col,e.target.value)},t.handleKeyDown=function(e){16===e.keyCode&&(t.props.rows===t.props.row+1&&t.props.addRows(1),t.props.cols===t.props.col+1&&t.props.addCols(1)),8===e.keyCode&&""===e.target.value?t.props.tryToDelete(t.props.row,t.props.col):0===e.target.selectionStart&&37===e.keyCode?0!==t.props.col?(document.getElementById(t.props.row+":"+(t.props.col-1)).focus(),document.getElementById(t.props.row+":"+(t.props.col-1)).selectionStart=0):0!==t.props.row&&document.getElementById(t.props.row-1+":"+(t.props.cols-1)).focus():e.target.selectionStart===e.target.value.length&&39===e.keyCode?t.props.col!==t.props.cols-1?(document.getElementById(t.props.row+":"+(t.props.col+1)).focus(),document.getElementById(t.props.row+":"+(t.props.col+1)).selectionStart=-1):t.props.row!==t.props.rows-1&&document.getElementById(t.props.row+1+":0").focus():40===e.keyCode?t.props.row!==t.props.rows-1?document.getElementById(t.props.row+1+":"+t.props.col).focus():t.props.col!==t.props.cols-1&&document.getElementById("0:"+(t.props.col+1)).focus():38===e.keyCode&&(0!==t.props.row?document.getElementById(t.props.row-1+":"+t.props.col).focus():0!==t.props.col&&document.getElementById(t.props.rows-1+":"+(t.props.col-1)).focus())},t}return Object(i.a)(r,[{key:"render",value:function(){return this.props.cols===this.props.col+1&&this.props.rows===this.props.row+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{tabIndex:-1,autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddBoth,value:this.props.num},this.props.row+":"+this.props.col)}):this.props.cols===this.props.col+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{tabIndex:0===this.props.row?"":-1,autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddCol,value:this.props.num},this.props.row+":"+this.props.col)}):this.props.rows===this.props.row+1?Object(d.jsx)("td",{children:Object(d.jsx)("input",{autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleAddRow,value:this.props.num},this.props.row+":"+this.props.col)}):Object(d.jsx)("td",{children:Object(d.jsx)("input",{autoComplete:"off",id:this.props.row+":"+this.props.col,onKeyDown:this.handleKeyDown,onChange:this.handleChange,value:this.props.num},this.props.row+":"+this.props.col)})}}]),r}(s.a.Component),u=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var t=this;return Object(d.jsx)("tr",{children:this.props.boxes.map((function(e,r){return Object(d.jsx)(h,{addRows:t.props.addRows,addCols:t.props.addCols,tryToDelete:t.props.tryToDelete,rows:t.props.rows,cols:t.props.cols,updateEntry:t.props.updateEntry,num:e,row:t.props.row,col:r})}))})}}]),r}(s.a.Component),m=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){var t;Object(p.a)(this,r);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).handleChange=function(e){t.props.updateParameter(t.props.id,e.target.value)},t}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsx)("input",{type:"text",defaultValue:this.props.defaultVal,onChange:this.handleChange})}}]),r}(s.a.Component),x=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(t){var o;return Object(p.a)(this,r),(o=e.call(this,t)).handleFocus=function(t){t.target.select()},o.tryToDelete=function(t,e){if(t===o.state.matrix.length-1||e===o.state.matrix[0].length-1)return null;for(var r=o.state.matrix,s=!0,a=0;a<o.state.matrix[0].length;a++)if(""!==o.state.matrix[t][a]){s=!1;break}s&&r.splice(t,1),s=!0;for(a=0;a<o.state.matrix.length;a++)if(""!==o.state.matrix[a][e]){s=!1;break}if(s)for(a=0;a<r.length;a++)r[a].splice(e,1);o.setState({matrix:r})},o.updateEntry=function(t,e,r){var s=o.state.matrix;s[t][e]=r,o.setState({matrix:s})},o.addCols=function(t){for(var e=o.state.matrix,r=0;r<e.length;r++)for(var s=0;s<t;s++)e[r].push("");o.setState({matrix:e})},o.addRows=function(t){for(var e=[],r=0;r<o.state.matrix[0].length;r++)e.push("");var s=o.state.matrix;for(r=0;r<t;r++)s.push(e);o.setState({matrix:s})},o.updateParameter=function(t,e){switch(t){case"sparse":o.setState({sparseVal:e});break;case"start":o.setState({start:e});break;case"end":o.setState({end:e});break;case"delim":o.setState({delim:e})}},o.state={matrix:[["",""],["",""]],sparseVal:"0",start:"{",end:"}",delim:",",latex:!1},o}return Object(i.a)(r,[{key:"render",value:function(){var t=this,e=this.state.matrix.map((function(e,r){return Object(d.jsx)(u,{rows:t.state.matrix.length,cols:t.state.matrix[0].length,tryToDelete:t.tryToDelete,addRows:t.addRows,addCols:t.addCols,updateEntry:t.updateEntry,boxes:e,row:r})}));return Object(d.jsxs)("div",{className:"matrixEditor",children:[Object(d.jsx)("table",{className:"table table-bordered table-hover",children:Object(d.jsx)("tbody",{children:e})}),Object(d.jsx)("textarea",{readonly:!0,onClick:this.handleFocus,className:"output",value:this.matrixToString(this.state.matrix)}),Object(d.jsxs)("p",{children:["Interpret empty elements (excluding pink row and pink column) as \xa0",Object(d.jsx)(m,{defaultVal:"0",id:"sparse",updateParameter:this.updateParameter})]}),Object(d.jsxs)("div",{class:"form-check form-switch",children:[Object(d.jsx)("input",{class:"form-check-input",onChange:function(){t.setState({latex:!t.state.latex})},type:"checkbox",value:"",id:"latexToggle"}),Object(d.jsx)("label",{class:"form-check-label",for:"latexToggle",children:"Format as LaTeX matrix"})]}),this.state.latex?null:Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Open arrays with \xa0",Object(d.jsx)(m,{defaultVal:"{",id:"start",updateParameter:this.updateParameter})]}),Object(d.jsxs)("p",{children:["End arrays with \xa0",Object(d.jsx)(m,{defaultVal:"}",id:"end",updateParameter:this.updateParameter})]}),Object(d.jsxs)("p",{children:["Separate elements with \xa0",Object(d.jsx)(m,{defaultVal:",",id:"delim",updateParameter:this.updateParameter})]})]})]})}},{key:"matrixToString",value:function(){if(this.state.latex){for(var t="",e=0;e<this.state.matrix.length-1;e++)for(var r=0;r<this.state.matrix[0].length-1;r++)""!==this.state.matrix[e][r]?t+=this.state.matrix[e][r]:t+=this.state.sparseVal,r!==this.state.matrix[0].length-2?t+=" & ":e!==this.state.matrix.length-2&&(t+=" \\\\ \n");return t}var o=this.state.start,s=this.state.end,a=this.state.delim,n=o.toString();for(e=0;e<this.state.matrix.length-1;e++){n+=o;for(r=0;r<this.state.matrix[0].length-1;r++)""!==this.state.matrix[e][r]?n+=this.state.matrix[e][r]:n+=this.state.sparseVal,r!==this.state.matrix[0].length-2&&(n+=a);n+=s,e!==this.state.matrix.length-2&&(n+=a)}return n+s}}]),r}(s.a.Component),j=function(t){Object(l.a)(r,t);var e=Object(c.a)(r);function r(){return Object(p.a)(this,r),e.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Quickly generate matrices for programming or LaTeX. Start entering your matrix below and the resulting 2D array will appear below the matrix. The pink row and column will be ignored from the output matrix, and typing in one of them will create a new row or column. Use the arrow keys or Tab to quickly navigate the matrix."}),Object(d.jsx)(x,{})]})}}]),r}(s.a.Component);n.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e6674c6a.chunk.js.map