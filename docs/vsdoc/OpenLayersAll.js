
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary></summary>
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        /// <field name="regex" type="">Container for regex functions.</field>
        /// <returns type="atropa"/>
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary></summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

  
/* vsdoc for atropa.regex */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.regex = {
        /// <summary></summary>
        /// <field name="patterns" type="">Regex patterns.</field>
        /// <returns type="atropa.regex"/>
                
        appendPrefixesAndSuffixes: function(word, threshold) {
            /// <summary>Appends common prefix, suffix, and word boundary regex strings to
            /// the supplied word.</summary>
            /// <param name="word" type="String">The word to append prefix and suffix to</param>
            /// <param name="threshold" type="Integer" integer="true">The word.length at which it does not
            /// make sense to append prefix and suffix. Defaults to 3.</param>
            /// <returns type="String">Returns the supplied word with prefix, suffix,
            /// and word boundaries attached. If the word.length was not greater
            /// than the threshold, only word boundaries are attached. The string
            /// represents a RegEx which should pick out most forms of regular
            /// words.</returns>
        }
        
    };

    var $x = window.atropa.regex;
    $x.__namespace = "true";
    $x.__typeName = "atropa.regex";
})(this);

  

  
/* vsdoc for atropa.regex.patterns */

(function (window) {
    window.atropa.regex = window.atropa.regex || {};

    window.atropa.regex.patterns = {
        /// <summary></summary>
        /// <field name="repeatedWords" type="">finds repeated words and phrases</field>
        /// <field name="paragraphBreaks" type="">finds paragraph breaks</field>
        /// <field name="lineBreaks" type="">finds line breaks</field>
        /// <returns type="atropa.regex.patterns"/>
                
    };

    var $x = window.atropa.regex.patterns;
    $x.__namespace = "true";
    $x.__typeName = "atropa.regex.patterns";
})(this);

  

