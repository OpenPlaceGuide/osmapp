import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { useToggleState } from '../../helpers';
import { t, Translation } from '../../../services/intl';
import { useOsmAuthContext } from '../../utils/OsmAuthContext';
import { getIdEditorLink } from '../../../utils';

export const DialogHeading = ({ children }) => (
  <Typography variant="overline" display="block" color="textSecondary">
    {children}
  </Typography>
);

export const ChangeLocationEditor = ({ location, setLocation, feature }) => {
  const { loggedIn } = useOsmAuthContext();
  const [showLocation, toggleShowLocation] = useToggleState(false);

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox checked={showLocation} onChange={toggleShowLocation} />
        }
        label={t('editdialog.location_checkbox')}
      />
      {showLocation && !loggedIn && (
        <div style={{ marginLeft: 30 }}>
          <TextField
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t('editdialog.location_placeholder')}
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            fullWidth
            rows={2}
            variant="outlined"
          />
        </div>
      )}
      {showLocation && loggedIn && (
        <div style={{ marginLeft: 30 }}>
          <Translation
            id="editdialog.location_editor_to_be_added"
            values={{ link: getIdEditorLink(feature) }}
          />
        </div>
      )}
    </>
  );
};

export const PlaceCancelledToggle = ({ cancelled, toggle }) => (
  <>
    <FormControlLabel
      control={<Checkbox checked={cancelled} onChange={toggle} />}
      label={t('editdialog.place_cancelled')}
    />
    <br />
  </>
);

export const ContributionInfoBox = () => {
  const { loggedIn } = useOsmAuthContext();
  return loggedIn ? (
    <Box mt={4} mb={4}>
      <Typography variant="body1" color="textSecondary" paragraph>
        <Translation id="editdialog.info_edit" />
      </Typography>
    </Box>
  ) : (
    <Box mt={4} mb={4}>
      <Typography variant="body1" color="textSecondary" paragraph>
        <Translation id="editdialog.info_note" />
      </Typography>
    </Box>
  );
};

export const CommentField = ({ comment, setComment }) => (
  <Box mb={2}>
    <TextField
      label={t('editdialog.comment')}
      placeholder={t('editdialog.comment_placeholder')}
      InputLabelProps={{
        shrink: true,
      }}
      multiline
      fullWidth
      rows={2}
      variant="outlined"
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
  </Box>
);

export const OsmLogin = () => {
  const { loggedIn, osmUser, handleLogin, handleLogout } = useOsmAuthContext();

  return (
    <Typography variant="body2" color="textSecondary" paragraph>
      {loggedIn ? (
        <>
          <Translation id="editdialog.loggedInMessage" values={{ osmUser }} /> (
          <button
            type="button"
            className="linkLikeButton"
            onClick={handleLogout}
          >
            {t('editdialog.logout')}
          </button>
          )
        </>
      ) : (
        <>
          <Translation id="editdialog.anonymousMessage1" />{' '}
          <button
            type="button"
            className="linkLikeButton"
            onClick={handleLogin}
          >
            {t('editdialog.anonymousMessage2_login')}
          </button>
          <Translation id="editdialog.anonymousMessage3" />
        </>
      )}
    </Typography>
  );
};
