import LoginModal from 'components/Modal/LoginModal';
import { Fragment, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reduce';

function ModalManager() {
  const { openedModals } = useSelector((state: RootState) => state.modals);

  return (
    <Suspense>
      {openedModals.map(({ name, props }) => {
        return (
          <Fragment key={name}>
            {(() => {
              switch (name) {
                case 'login': {
                  return <LoginModal {...props} />;
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
}

export default ModalManager;
