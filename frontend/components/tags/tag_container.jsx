import { connect } from 'react-redux';
import Tag from './tag';
import { createTag, getAllTags } from '../../actions/tag_actions';

const mapStateToProps = ({tags}) => ({
  allTags: tags.allTags
});

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag) => dispatch(createTag(tag)),
  getAllTags: () => dispatch(getAllTags())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Tag);
