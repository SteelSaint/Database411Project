import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': ''rationaleregular'',
    'src': 'url('fonts/rationale-regular-webfont.eot')',
    'src': 'url('fonts/rationale-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/rationale-regular-webfont.woff2') format('woff2'),
         url('fonts/rationale-regular-webfont.woff') format('woff'),
         url('fonts/rationale-regular-webfont.ttf') format('truetype'),
         url('fonts/rationale-regular-webfont.svg#rationaleregular') format('svg')',
    'fontWeight': 'normal',
    'fontStyle': 'normal'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'background': '#FFF url(img/bg-wall-repeat.jpg)',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'fontFamily': 'Helvetica, Arial, sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#head': {
    'height': [{ 'unit': 'px', 'value': 118 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'url(img/bg-header.png) repeat-x bottom center',
    'color': '#FFF',
    'zIndex': '9000',
    'position': 'absolute'
  },
  'innerhead': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 960 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'background': 'url(img/logo.png) no-repeat left center'
  },
  'innerhead h1': {
    'display': 'none'
  },
  'innerhead ul': {
    'display': 'none'
  },
  'utility': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': -30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.01 }, { 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.01 }],
    'width': [{ 'unit': '%H', 'value': 0.98 }],
    'maxWidth': [{ 'unit': 'px', 'value': 960 }],
    'textAlign': 'right',
    'fontSize': [{ 'unit': 'em', 'value': 0.85 }]
  },
  'utility li': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'display': 'inline'
  },
  'utility a': {
    'color': '#ffc002',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'config': {
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': 'px', 'value': 0 }]
  },
  'config a': {
    'color': '#EAA90B',
    'textDecoration': 'none'
  },
  'alltools': {
    'background': 'url(img/bg-begin-repeat.jpg)',
    'color': '#212121',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.01 }, { 'unit': 'px', 'value': 0 }]
  },
  'alltools a:link': {
    'color': '#FFF',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'alltools a:visited': {
    'color': '#FFF',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  '#foot a:link': {
    'color': '#FFF',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  '#foot a:visited': {
    'color': '#FFF',
    'textDecoration': 'none',
    'cursor': 'pointer'
  },
  'alltools a:hover': {
    'borderBottom': [{ 'unit': 'string', 'value': '#FFF' }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }]
  },
  '#foot a:hover': {
    'borderBottom': [{ 'unit': 'string', 'value': '#FFF' }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 1 }]
  },
  'innerconfig': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 980 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'inneralltools': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'maxWidth': [{ 'unit': 'px', 'value': 980 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'h2': {
    'fontFamily': ''rationaleregular', sans-serif',
    'fontSize': [{ 'unit': 'em', 'value': 2.5 }],
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': -2 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': '%V', 'value': 0.04 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%V', 'value': 0.005 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#head ul li': {
    'listStyle': 'none',
    'display': 'inline',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }]
  },
  'dl ul li': {
    'listStyle': 'none',
    'display': 'inline',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }]
  },
  '#foot li': {
    'listStyle': 'none',
    'display': 'inline',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.4 }]
  },
  'ulaliases': {
    'listStyle': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'ulprojects': {
    'listStyle': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'ultools': {
    'listStyle': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'ulvhost': {
    'listStyle': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'ulaliases a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../../index.php?img=pngFolder) 0 100% no-repeat'
  },
  'ulprojects a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../../index.php?img=pngFolder) 0 100% no-repeat'
  },
  'ultools a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../../index.php?img=pngFolder) 0 100% no-repeat'
  },
  'ulvhost a': {
    'paddingLeft': [{ 'unit': 'px', 'value': 22 }],
    'background': 'url(../../index.php?img=pngFolder) 0 100% no-repeat'
  },
  'ultools a': {
    'background': 'url(../../index.php?img=pngWrench) 0 100% no-repeat'
  },
  'ulaliases a': {
    'background': 'url(../../index.php?img=pngFolderGo) 0 100% no-repeat'
  },
  'ulvhost a': {
    'background': 'url(../../index.php?img=pngFolderGo) 0 100% no-repeat'
  },
  'dl': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'dt': {
    'width': [{ 'unit': 'px', 'value': 250 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'textAlign': 'center',
    'clear': 'both',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left',
    'background': 'url(img/bg-title-dark.png) no-repeat',
    'color': '#FFF',
    'screen&&<w750': {
      'textAlign': 'left',
      'width': [{ 'unit': '%H', 'value': 1 }],
      'float': 'none',
      'margin': [{ 'unit': '%V', 'value': 0.02 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
      'padding': [{ 'unit': '%V', 'value': 0.15 }, { 'unit': '%H', 'value': 0.15 }, { 'unit': '%V', 'value': 0.15 }, { 'unit': '%H', 'value': 0.15 }]
    }
  },
  'dd': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': '%H', 'value': 0.005 }, { 'unit': 'px', 'value': 14 }, { 'unit': '%H', 'value': 0.005 }],
    'overflow': 'auto'
  },
  'dd ul li': {
    'float': 'left',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.165 }],
    'minWidth': [{ 'unit': 'px', 'value': 140 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'background': 'url(../../index.php?img=pngPlugin) 2px 50% no-repeat',
    'lineHeight': [{ 'unit': 'px', 'value': 1.6 }]
  },
  'divider1': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'url(img/divider.png) repeat-x center top',
    'zIndex': '2000'
  },
  'divider2': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -5 }, { 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'url(img/divider.png) repeat-x center bottom',
    'zIndex': '2000',
    'clear': 'left'
  },
  'column': {
    'padding': [{ 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.005 }, { 'unit': '%V', 'value': 0.005 }, { 'unit': '%H', 'value': 0.005 }],
    'display': 'inline-block',
    'verticalAlign': 'top',
    'minWidth': [{ 'unit': 'px', 'value': 220 }]
  },
  'three-columns column': {
    'width': [{ 'unit': '%H', 'value': 0.32 }]
  },
  'four-columns column': {
    'width': [{ 'unit': '%H', 'value': 0.23 }]
  },
  '#foot': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'lineHeight': [{ 'unit': 'px', 'value': 100 }],
    'background': 'url(img/bg-dl-repeat.jpg) repeat-x top'
  }
});
