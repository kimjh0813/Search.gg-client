import { Fragment, Suspense, lazy } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'reduce';

const MODALS = {
  LoginModal: lazy(() => import('components/Modal/LoginModal')),
  SignUpModal: lazy(() => import('components/Modal/SignUpModal')),
};

const ModalManager = () => {
  const { openedModals } = useSelector((state: RootState) => state.modals);

  return (
    <Suspense>
      {openedModals.map(({ name, props }) => {
        return (
          <Fragment key={name}>
            {(() => {
              switch (name) {
                case 'LoginModal': {
                  return <MODALS.LoginModal />;
                }
                case 'SignUpModal': {
                  return <MODALS.SignUpModal />;
                }
                default: {
                  return <></>;
                }
              }
            })()}
          </Fragment>
        );
      })}
    </Suspense>
  );
};

export default ModalManager;
