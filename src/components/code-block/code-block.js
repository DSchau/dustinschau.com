import React from 'react';
import PropTypes from 'prop-types';
import dracula from 'prism-react-renderer/themes/dracula';

import { Copy } from '../copy';
import { LazyHighlight } from '../lazy-highlight';
import { normalize } from './normalize';

import styles from './code-block.module.css';

const getParams = (name = ``) => {
  const [lang, params = ``] = name.split(`:`);
  return [lang.split(`language-`).pop().split(`{`).shift()].concat(
    params.split(`&`).reduce((merged, param) => {
      const [key, value] = param.split(`=`);
      merged[key] = value;
      return merged;
    }, {})
  );
};

const CodeBlock = ({
  children,
  language: WPLanguage,
  title: WPTitle,
  className = children.props ? children.props.className : ``,
  copy = true,
}) => {
  let language;
  let title = ``;

  if (!WPLanguage) {
    language = getParams(className)[0];
    title = getParams(className)[1].title;
  } else {
    language = WPLanguage;
    title = WPTitle;
  }

  const [content, highlights] = normalize(
    children.props && children.props.children
      ? children.props.children
      : children,
    className
  );

  return (
    <LazyHighlight code={content} language={language} theme={dracula}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          <div className={`gatsby-highlight`}>
            {title && (
              <p className={styles.codeTitle}>{title.replace(/`/g, '')}</p>
            )}
            <pre
              className={`${styles.container} language-${language} p-2 pt-6 md:p-4 lg:p-8 ${styles.pre}`}
            >
              {copy && (
                <Copy
                  fileName={title}
                  className={styles.copy}
                  content={content}
                />
              )}
              <code className={`language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });
                  const className = [lineProps.className]
                    .concat(highlights[i] && `gatsby-highlight-code-line`)
                    .filter(Boolean)
                    .join(` `);
                  return (
                    <div
                      key={i}
                      {...Object.assign({}, lineProps, {
                        className,
                      })}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </React.Fragment>
      )}
    </LazyHighlight>
  );
};

CodeBlock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  language: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  copy: PropTypes.bool,
};

export { CodeBlock };
