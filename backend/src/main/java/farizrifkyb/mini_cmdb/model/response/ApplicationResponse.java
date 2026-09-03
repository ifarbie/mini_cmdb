package farizrifkyb.mini_cmdb.model.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApplicationResponse {
    private Long id;

    private String name;

    private String status;

    private String description;

    private String environment;

    private List<ApplicationGroupResponse> groups;
}
