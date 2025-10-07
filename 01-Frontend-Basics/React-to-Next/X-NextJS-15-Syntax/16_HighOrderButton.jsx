'use client';
import CustomButton from './CustomButton';

export default function withLogger(WrappedComponent) {
  return function(props) {
    console.log('Props:', props);
    return <WrappedComponent {...props} />;
  };
}
